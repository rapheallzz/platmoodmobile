// VideoModal.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, ActivityIndicator, Picker } from 'react-native';
import { useSelector } from 'react-redux';
import * as DocumentPicker from 'expo-document-picker';

const VideoModal = ({ visible, onClose }) => {
    const { token, user } = useSelector((state) => state.auth);

    const [videoData, setVideoData] = useState({
        title: '',
        description: '',
        credit: '',
        category: 'Top 10',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const [files, setFiles] = useState([]);

    const handleFileChange = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: '*/*', multiple: true });
        if (result.type === 'success') {
            setFiles([...files, result]);
        }
    };

    const handleInputChange = (name, value) => {
        setVideoData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        setLoading(true);

        const formData = new FormData();
        formData.append('title', videoData.title);
        formData.append('description', videoData.description);
        formData.append('credit', videoData.credit);
        formData.append('category', videoData.category);
        formData.append('userId', user._id);
        files.forEach((file) => {
            formData.append('files', file);
        });

        try {
            const response = await fetch('https://playmoodserver-stg-0fb54b955e6b.herokuapp.com/api/content/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                    console.log(`Upload Progress: ${progress}%`);
                    setUploadProgress(progress);
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Video submitted successfully:', data);
                setSuccess(true);
                onClose();
            } else {
                console.error('Failed to submit video:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error submitting video:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>&times;</Text>
                    </TouchableOpacity>
                    <Text style={styles.heading}>Submit Video</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={videoData.title}
                        onChangeText={(value) => handleInputChange('title', value)}
                    />
                    <TextInput
                        style={styles.textArea}
                        placeholder="Video Description"
                        value={videoData.description}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(value) => handleInputChange('description', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Production Credits"
                        value={videoData.credit}
                        onChangeText={(value) => handleInputChange('credit', value)}
                    />
                    <Picker
                        selectedValue={videoData.category}
                        onValueChange={(value) => handleInputChange('category', value)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Top 10" value="Top 10" />
                        <Picker.Item label="Fashion Show" value="Fashion Show" />
                        <Picker.Item label="Teen" value="Teen" />
                        <Picker.Item label="Channels" value="Channels" />
                        <Picker.Item label="Documentaries" value="Documentarie" />
                        <Picker.Item label="Interviews" value="Interview" />
                        <Picker.Item label="Social" value="Social" />
                        <Picker.Item label="Behind the camera" value="Behind the camera" />
                        <Picker.Item label="Soon in Playmood" value="Soon in Playmood" />
                        <Picker.Item label="Watchlist" value="Watchlist" />
                        <Picker.Item label="Recommended" value="Daries" />
                        <Picker.Item label="New on Playmood" value="New on Playmood" />
                        <Picker.Item label="Only in Playmood" value="Only in Playmood" />
                    </Picker>
                    <TouchableOpacity style={styles.uploadButton} onPress={handleFileChange}>
                        <Text style={styles.uploadButtonText}>Upload Video and Thumbnail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.uploadButton} onPress={handleSubmit} disabled={loading}>
                        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.uploadButtonText}>Upload</Text>}
                    </TouchableOpacity>
                    {success && (
                        <View style={styles.successNotification}>
                            <Text style={styles.successText}>Video uploaded successfully!</Text>
                        </View>
                    )}
                    {loading && (
                        <View style={styles.progressBar}>
                            <View style={[styles.filler, { width: `${uploadProgress}%` }]} />
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    closeButtonText: {
        fontSize: 24,
        color: '#000',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
    },
    textArea: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        textAlignVertical: 'top',
    },
    picker: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
    },
    uploadButton: {
        padding: 10,
        backgroundColor: '#541011',
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 10,
    },
    uploadButtonText: {
        color: '#fff',
    },
    successNotification: {
        backgroundColor: '#541011',
        padding: 10,
        borderRadius: 4,
        marginTop: 10,
        alignItems: 'center',
    },
    successText: {
        color: '#fff',
    },
    progressBar: {
        width: '100%',
        backgroundColor: '#f3f3f3',
        borderRadius: 4,
        marginTop: 10,
    },
    filler: {
        backgroundColor: '#541011',
        height: 10,
        borderRadius: 4,
    },
});

export { VideoModal };

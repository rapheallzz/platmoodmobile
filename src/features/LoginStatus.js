import AsyncStorage from '@react-native-async-storage/async-storage';

useEffect(() => {
  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setTimeout(() => {
        setIsModalVisible(true);
      }, 5000); // Show modal after 5 seconds
    }
  };

  checkLoginStatus();
}, []);

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MobileHeader from '../components/MobileHeader';
import tw from 'tailwind-react-native-classnames';

export default function CookiesScreen() {
  return (
    <View style={tw`flex-1 bg-black`}>
      <MobileHeader />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Cookies Policy</Text>
        <Text style={styles.effectiveDate}>Effective Date: 01/09/2023</Text>

        <Text style={styles.paragraph}>
          Welcome to PlaymoodTV ("we," "our," or "us"). This Cookies Policy is designed to help
          you understand how we use cookies and similar technologies on our website. By
          accessing or using our website, you consent to the use of cookies as described in this
          policy.
        </Text>

        <Text style={styles.sectionTitle}>What Are Cookies</Text>
        <Text style={styles.paragraph}>
          Cookies are small text files that are placed on your device when you visit a website.
          They are widely used to make websites work more efficiently and provide valuable
          information to website owners. Cookies can serve various purposes, such as recognizing
          your device, remembering your preferences, and improving your browsing experience.
        </Text>

        <Text style={styles.sectionTitle}>Types of Cookies We Use</Text>
        <Text style={styles.paragraph}>
          We may use the following types of cookies on our website:
        </Text>
        <Text style={styles.listItem}>- <Text style={styles.bold}>Essential Cookies:</Text> These cookies are necessary for the website to function properly. They enable core functionalities, such as navigating between pages and accessing secure areas of the website. You cannot opt out of these cookies.</Text>
        <Text style={styles.listItem}>- <Text style={styles.bold}>Analytical/Performance Cookies:</Text> These cookies allow us to collect information about how visitors use our website. They help us understand which pages are most popular, how users navigate the site, and if they encounter any errors. The data collected is used to improve the website's performance.</Text>
        <Text style={styles.listItem}>- <Text style={styles.bold}>Functionality Cookies:</Text> These cookies remember choices you make on the website, such as language preferences and customizations. They enhance your user experience by providing personalized features.</Text>
        <Text style={styles.listItem}>- <Text style={styles.bold}>Targeting/Advertising Cookies:</Text> These cookies are used to deliver advertisements that are relevant to your interests. They may also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.</Text>

        <Text style={styles.sectionTitle}>How We Use Cookies</Text>
        <Text style={styles.paragraph}>We use cookies for the following purposes:</Text>
        <Text style={styles.listItem}>- To provide and improve our website and services.</Text>
        <Text style={styles.listItem}>- To analyze website usage and trends.</Text>
        <Text style={styles.listItem}>- To remember your preferences and settings.</Text>
        <Text style={styles.listItem}>- To deliver personalized content and advertising.</Text>

        <Text style={styles.sectionTitle}>Your Choices</Text>
        <Text style={styles.paragraph}>
          You can manage your cookie preferences and settings through your web browser. Most
          web browsers allow you to control cookie settings and delete cookies at any time.
          However, please note that disabling certain cookies may affect the functionality of our
          website.
        </Text>

        <Text style={styles.sectionTitle}>Changes to This Cookies Policy</Text>
        <Text style={styles.paragraph}>
          We may update this Cookies Policy from time to time to reflect changes in our use of
          cookies. The updated policy will be posted on this page with an effective date, so please
          check back periodically to stay informed about our cookie practices.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have questions, concerns, or requests regarding this Privacy Policy, please contact
          us at creators@playmoodtv.com.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    effectiveDate: {
        color: 'white',
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 20,
    },
    sectionTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    paragraph: {
      color: 'white',
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 10,
    },
    listItem: {
        color: 'white',
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 5,
        marginLeft: 10,
    },
    bold: {
        fontWeight: 'bold',
    }
  });

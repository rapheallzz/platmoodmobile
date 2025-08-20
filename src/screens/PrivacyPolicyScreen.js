import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MobileHeader from '../components/MobileHeader';
import tw from 'tailwind-react-native-classnames';

export default function PrivacyPolicyScreen() {
  return (
    <View style={tw`flex-1 bg-black`}>
      <MobileHeader />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.effectiveDate}>Effective Date: 01/09/2023</Text>

        <Text style={styles.paragraph}>
          Welcome to PlaymoodTV ("we," "our," or "us"). We value your privacy, and this Privacy
          Policy is designed to help you understand how we collect, use, disclose, and safeguard
          your personal information. By accessing or using our website, you consent to the
          practices described in this Privacy Policy.
        </Text>

        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Personal Information:</Text> When you visit our website, we may collect personal
          information you provide directly, such as your name, email address, and contact
          details. We collect this information when you fill out forms, subscribe to
          newsletters, or communicate with us.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Automated Information:</Text> We may collect certain information automatically
          when you visit our website, such as your IP address, browser type, operating
          system, and browsing behavior. We may use cookies, web beacons, and similar
          technologies to gather this data.
        </Text>

        <Text style={styles.sectionTitle}>How we use your information</Text>
        <Text style={styles.paragraph}>
          We may use your personal information for the following purposes:
        </Text>
        <Text style={styles.listItem}>- To provide, maintain, and improve our website and services.</Text>
        <Text style={styles.listItem}>- To respond to your inquiries, comments, or questions.</Text>
        <Text style={styles.listItem}>- To send you newsletters, updates, and promotional materials.</Text>
        <Text style={styles.listItem}>- To monitor and analyze usage patterns and trends.</Text>
        <Text style={styles.listItem}>- To protect our rights, privacy, safety, or property, and/or that of you or others.</Text>

        <Text style={styles.sectionTitle}>Disclosure of Your Information</Text>
        <Text style={styles.paragraph}>
            We may share your personal information in the following circumstances:
        </Text>
        <Text style={styles.listItem}>- With third-party service providers who assist us in operating our website and providing services.</Text>
        <Text style={styles.listItem}>- With your consent, when you choose to share information on our website.</Text>
        <Text style={styles.listItem}>- To comply with legal obligations or protect our rights and safety.</Text>

        <Text style={styles.sectionTitle}>Security</Text>
        <Text style={styles.paragraph}>
            We take reasonable measures to protect your personal information from unauthorized
            access, disclosure, alteration, or destruction. However, no data transmission or storage
            system is entirely secure, and we cannot guarantee the security of your information.
        </Text>

        <Text style={styles.sectionTitle}>Your Choices</Text>
        <Text style={styles.paragraph}>
            You have choices regarding the personal information we collect:
        </Text>
        <Text style={styles.listItem}>- You can access, correct, or update your personal information by contacting us.</Text>
        <Text style={styles.listItem}>- You can opt out of receiving promotional emails by following the instructions in the emails.</Text>

        <Text style={styles.sectionTitle}>Children's Privacy</Text>
        <Text style={styles.paragraph}>
            Our website is not intended for children under the age of 13. We do not knowingly
            collect personal information from children under 13. If you believe a child has provided
            us with personal information, please contact us, and we will remove it.
        </Text>

        <Text style={styles.sectionTitle}>Changes to This Privacy Policy</Text>
        <Text style={styles.paragraph}>
            We may update this Privacy Policy from time to time to reflect changes to our practices.
            The updated policy will be posted on this page, and the date of the latest revision will be
            indicated. We encourage you to review this Privacy Policy periodically.
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

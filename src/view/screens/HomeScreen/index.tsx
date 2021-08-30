import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Vitalii Variichuk</Text>
      </View>
      <View style={styles.profileBlockContainer}>
        <View style={styles.profileBlock}></View>
        <Text style={{ flex: 1, flexWrap: 'wrap', paddingLeft: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolor sit
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. amet,
          consectetur adipisicing elit.
        </Text>
      </View>
      <View style={styles.educationBlockContainer}>
        <Text style={{ flex: 1, flexWrap: 'wrap' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </Text>
        <View style={styles.educationBlock}></View>
      </View>
      <View style={styles.aboutBlockContainer}>
        <Text style={styles.h1}>About Me</Text>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          recusandae dolorem voluptatibus harum veniam aspernatur vitae? Sequi
          tempora animi explicabo natus id recusandae officiis autem consequatur
          ipsam itaque, vitae incidunt. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ipsam recusandae dolorem voluptatibus harum veniam
          aspernatur vitae? Sequi tempora animi explicabo natus id recusandae
          officiis autem consequatur ipsam itaque, vitae incidunt. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ipsam recusandae dolorem
          voluptatibus harum veniam aspernatur vitae? Sequi tempora animi
          explicabo natus id recusandae officiis autem consequatur ipsam itaque,
          vitae incidunt.
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

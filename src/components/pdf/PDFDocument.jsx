import React from 'react';
import { Document, Text, Page, StyleSheet, View, Font} from '@react-pdf/renderer';

const PDFDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Miguel Angel Cabrera Victoria</Text>
          <Text style={styles.subtitle}>Software Engineer</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.info}>Address: Mexico City, Mexico</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.info}>Email: miguelangelcabreravictoria@gmail.com</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.info}>Phone: 55-2173-1994</Text>
          </View>

          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.info}>
            <Text>Tecnologico De Monterrey, Campus Santa Fe</Text>
            <Text>September 2021 - June 2025</Text>
            <Text>Bachelor of Science Degree in Computer Science</Text>
          </View>

          <Text style={styles.sectionTitle}>Computer Skills and Courses</Text>
          <View style={styles.infoContainer}>

            <Text style={styles.info}> - Platforms: Windows, Linux Unix</Text>
            <Text style={styles.info}> - Languages: HTML, CSS, JavaScript, Python, C++</Text>
            <Text style={styles.info}> - Other Languages: SQL, JSON</Text>
            <Text style={styles.info}> - Applications: Microsoft Word, Power Point, Excel, GitHub</Text>

            <View>
            <Text style={styles.info}>Major Courses Included:</Text>
            <Text style={styles.info}>
                DataBase Managment System, Data Structures, Algorithms, Oriented Object Programming,
                Software Development, Web Applications, Data Security and Cryptography
            </Text>
            </View>
            
            <View>
                <Text style={styles.info}>Online Courses:</Text>
                <Text style={styles.info}>
               The Complete 2023 Web Development (Udemy), Master the Coding Interview: Data Structures + Algorithms
            </Text></View>
    
          </View>

          <Text style={styles.sectionTitle}>Projects</Text>
          <View>
            <Text >Video Game Development</Text>
            <Text style={styles.info}>A collaborative develop in a video game for an academic project based on the SCRUM 
            methodology with the objective of allowing the user to select a character and difficulty level to 
            defeat incorporated enemies, providing a fun gaming experience. Additionally, the user should 
            be able to view the game description within a web page.</Text>
          </View>
          <View>
            <Text>Ticket System</Text>
            <Text style={styles.info}>A collaboration develops ticket system for an academic project aimed at assisting the Por 
            Mexico Foundation in reporting infrastructure issues in its various classrooms is conceived as 
            digital platform that enables classrooms coordinators to exclusively generate incident tickets. 
            Coordinators would be the only authorized individuals to log incidents. These reports would 
            be automatically forwarded to a central administrative representative for coordinating and 
            supervising the request.</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '10px',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  infoContainer: {
    flexDirection: 'column',
    marginBottom: '8px',
  },
  infoLabel: {
    fontWeight: 'bold',
    fontSize: '15px'
  },
  info: {
    marginLeft: '10px',
    fontSize:'15px',
    fontFamily:'Times-Roman'
  },
});

export default PDFDocument;

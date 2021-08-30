import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
  },
  h1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 16,
  },
  header: {
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 1,
  },
  profileBlockContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  profileBlock: {
    width: 160,
    height: 160,
    backgroundColor: 'tomato',
    borderColor: 'white',
    borderWidth: 5,
    elevation: 5,
    borderRadius: 7,
  },
  educationBlockContainer: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  educationBlock: {
    width: 160,
    height: 160,
    backgroundColor: 'tomato',
    borderColor: 'white',
    borderWidth: 5,
    elevation: 5,
    borderRadius: 7,
  },
  aboutBlockContainer: {
    flexDirection: 'column',
  },
  aboutText: {
    textAlign: 'justify',
  },
});

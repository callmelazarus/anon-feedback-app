import Image from "next/image";
import FeedbackBox from "./feedbackinput";
import TabsComponent from "./tabSelection";

export default function Home() {

  // Initialize the Google Sheets API client
const { GoogleApis } = require('googleapis');
const sheets = GoogleApis.sheets('v4');

async function getSheetData() {
    const auth = await authenticate(); // Implement authenticate() to use OAuth2
    const request = {
        spreadsheetId: 'YOUR_SPREADSHEET_ID',
        range: 'Sheet1!A1:D10',
        auth: auth,
    };
    const response = await sheets.spreadsheets.values.get(request);
    console.log(response.data.values);
}

function authenticate() {
    // Implement OAuth2 authentication
    // Use the credentials JSON file
    // Use libraries like google-auth-library or your preferred method
}

// Call the function to fetch data
getSheetData();


  const items = [
    {title: "Tab 1", content: "Test, Test 2"},
    {title: "Tab 1", content: "Test"},
    {title: "Tab 1", content: "Test"},
    {title: "Tab 1", content: "Test"},
    {title: "Tab 1", content: "Test"},
    {title: "Tab 1", content: "Test"},

  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FeedbackBox></FeedbackBox>
      <TabsComponent items = {items} ></TabsComponent>
    </main>
  );
}

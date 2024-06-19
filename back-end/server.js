const express = require('express');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001; // Choose a different port for the backend

// Load client secrets from a local file
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));

const { client_secret, client_id, redirect_uris } = credentials.web;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// Define the scopes
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

// Route to start OAuth flow
app.get('/auth', (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(authUrl);
});

// OAuth2 callback route
app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;
  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    res.send('Authentication successful! You can close this tab.');
  } catch (error) {
    res.status(500).send('Error retrieving access token');
  }
});

// Route to fetch data from Google Sheets
app.get('/sheets', async (req, res) => {
  const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your Spreadsheet ID
  const range = 'Sheet1!A1:D10'; // Replace with the range you want to fetch

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

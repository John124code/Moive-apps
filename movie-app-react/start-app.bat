@echo off
echo ====================================
echo   Movie App React - Setup Script
echo ====================================
echo.

echo Installing dependencies...
call npm install

echo.
echo Starting the React development server...
echo The app will open in your browser at http://localhost:3000
echo.
echo Press Ctrl+C to stop the server when done.
echo.

call npm start

pause

@echo off

REM Run "npm run build" in the current directory
echo Running npm run build...
npm run build

REM Move the "dist" directory to "../app/" if it exists
IF EXIST dist (
    echo Moving the 'dist' directory to '../app/'...
    move dist "..\app\"
)

REM Check if the "views" directory already exists
IF EXIST "..\app\views" (
    REM Rename the "dist" directory to "views"
    echo Renaming the 'dist' directory to 'views'...
    rename "..\app\dist" "views"
)

REM Run "npm start" in the "/app" directory
echo Running npm start in the '/app' directory...
cd "..\app"
npm start

echo Script execution complete.

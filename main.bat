@echo off
:start
echo Please choose an option:
echo 1. install packages
echo 2. build css
echo 3. build electron app
echo 4. run electron app
echo 5. Exit

set /p UserInput=Enter your choice (1-5): 

if "%UserInput%"=="1" goto installPackages
if "%UserInput%"=="2" goto buildCss
if "%UserInput%"=="3" goto buildBin
if "%UserInput%"=="4" goto runBin
if "%UserInput%"=="5" goto End

echo Invalid choice, please run the script again.
goto End

:installPackages
echo.
echo Installing packages...
npm install
goto start

:buildBin
echo.
echo Building electron app...
npm run package
goto start

:runBin
echo.
echo Running electron app...
npm start
pause
goto start
:buildCss
echo.
echo Building css...
npm run build:css
goto start

:End
echo.
echo script has ended
pause
Exit



:: make sure you don't need to restart the script every time you want to run it
goto start
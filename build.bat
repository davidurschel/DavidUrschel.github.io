@echo off
setlocal

:: Define the date format for the commit message
for /f "tokens=2 delims==" %%I in ('"wmic os get localdatetime /value"') do set datetime=%%I
set formatted_date=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%:%datetime:~12,2%

:: Build the project
call npm run build

:: Copy docs
if exist docs rmdir /s /q docs
mkdir docs
xcopy /e /i dist docs

:: Push docs
if not exist .git (
    git init
)
git add docs
git commit -m "updated build distribution %formatted_date%"
git push origin main

endlocal

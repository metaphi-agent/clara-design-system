@echo off
REM Clara Design System - Preview Setup Script (Windows)

echo Clara Design System - Setting up preview...
echo.

echo Step 1/3: Building design system package...
echo.
call npm install
call npm run build

if %errorlevel% neq 0 (
    echo Error building design system!
    exit /b %errorlevel%
)

echo.
echo Design system built successfully!
echo.

echo Step 2/3: Installing preview app dependencies...
echo.
cd example
call npm install

if %errorlevel% neq 0 (
    echo Error installing dependencies!
    exit /b %errorlevel%
)

echo.
echo Preview app dependencies installed!
echo.

echo Step 3/3: Starting development server...
echo.
echo Preview will open at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

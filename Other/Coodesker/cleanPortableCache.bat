@ECHO OFF
reg delete "HKEY_CURRENT_USER\Software\Coodesker" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run" /v "Coodesker" /f

schtasks /delete /tn Coodesker /f

if exist %APPDATA%\Coodesker\cache (
   rd /s /Q %APPDATA%\Coodesker\cache
)

for /F %%i in ('dir /b "%APPDATA%\Coodesker\*.*"') do (
   goto :NOTEMPTY
)

if exist %APPDATA%\Coodesker (
   rd /s /Q %APPDATA%\Coodesker
)

:NOTEMPTY

echo Success!

pause
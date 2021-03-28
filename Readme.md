## Ionic Google SignIn Using Firebase  

>>To get started with Google sign in, we need to install a Capacitor community plugin:  
```
npm i @codetrix-studio/capacitor-google-auth`  
npx cap update  
```

### Android Preparation  
>>Open the Firebase project settings and click Add app and select Android.  

>>Make sure you put in the correct bundle ID of your app - the one that’s already in your capacitor.config.json, that you picked during initial app setup and that will later be used inside your Google Play console and Apple developer account for your app.  

>>We also need SHA-1 signing certificate.  

>>After Completing all these steps download the **google-services.json** file and move it to the android/app folder inside your Ionic project.  

>>To make the value available to our Android app we also need to make a change to the **android/app/src/main/res/values/strings.xml** and add an entry for the server_client_id:
```
<?xml version='1.0' encoding='utf-8'?>
<resources>
    <string name="app_name">Ionic Google</string>
    <string name="title_activity_main">Ionic Google</string>
    <string name="package_name">com.googlesignin.ionic</string>
    <string name="custom_url_scheme">com.googlesignin.ionic</string>
    _<string name="server_client_id">REPLACEME.apps.googleusercontent.com</string>_
</resources>
```
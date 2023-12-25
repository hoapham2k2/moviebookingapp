import { CapacitorConfig } from '@capacitor/cli';

//config capacitor to link "https://moviebookingapp.vercel.app" for deeplink
const config: CapacitorConfig = {
  appId: "io.ionic.starter", //your app id, meaning appId is the same as package name in android
  appName: "my-android-app", //your app name
  webDir: "dist", //your web dir (build folder)
  server: {
    // androidScheme: "https", //your scheme, default is https
    // hostname: "moviebookingapp.vercel.app/home", //your hostname

    //turn to localhost for testing
    androidScheme: "http",
    hostname: "localhost:8100",
  },
};


export default config;

import { CapacitorConfig } from '@capacitor/cli';

//config capacitor to link "https://moviebookingapp.vercel.app" for deeplink
const config: CapacitorConfig = {
  appId: "com.moviebookingapp.deeplinks", //your app id
  appName: "android-app", //your app name
  webDir: "dist", //your web dir (build folder)
  server: {
    androidScheme: "https", //your scheme, default is https
    hostname: "moviebookingapp.vercel.app", //your hostname

    // //turn to localhost for testing
    // androidScheme: "http",
    // hostname: "localhost:8100",
  },
};


export default config;

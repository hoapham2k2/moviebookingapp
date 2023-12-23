import { CapacitorConfig } from '@capacitor/cli';

// const config: CapacitorConfig = {
//   appId: "io.ionic.starter",
//   appName: "my-android-app",
//   webDir: "dist",
//   server: {
//     androidScheme: "https",
//     hostname: "moviebookingapp.vercel.app",
//   },
// };

//config capacitor to link "https://moviebookingapp.vercel.app" for deeplink
const config: CapacitorConfig = {
  appId: "io.ionic.starter", //your app id, meaning appId is the same as package name in android
  appName: "my-android-app", //your app name
  webDir: "dist", //your web dir (build folder)
  server: {
    androidScheme: "https", //your scheme, default is https
    hostname: "moviebookingapp.vercel.app/home", //your hostname
  },
};


export default config;

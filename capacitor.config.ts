import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "my-android-app",
  webDir: "dist",
  server: {
    androidScheme: "https",
    hostname: "moviebookingapp.vercel.app",
  },
};

export default config;

// import { Tabs } from "expo-router";

// export default function Layout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: { display: "none" }
//       }}
//     />
//   );
// }
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // removes the Home header
      }}
    />
  );
}
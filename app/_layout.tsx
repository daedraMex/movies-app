import React, { useEffect } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

//actions


//hooks
import { useFonts } from "expo-font";
import "../global.css";

const RootLayout = () => {
   const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("./../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Medium": require("./../assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Regular": require("./../assets/fonts/WorkSans-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

    
  const queryClient = new QueryClient();
  

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{
        headerShown: false,
        
      }}/>
      {/* <View className="flex-1 items-center justify-center ">
        <Text style={{ fontFamily: "WorkSans-Black", fontSize: 24 }}  className="text-slate-950">
               Now Playing Movies
      </Text>
      </View> */}

    </QueryClientProvider>
  )
}

export default RootLayout
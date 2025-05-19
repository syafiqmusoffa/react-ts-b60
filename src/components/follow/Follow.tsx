import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

function Follow() {
  return (
    <Tabs defaultValue="following" className="pt-3 w-s">
      <TabsList className="w-full bg-gray-700 ">
        <TabsTrigger value="following" className="cursor-pointer">
          Following
        </TabsTrigger>
        <TabsTrigger value="follower" className="cursor-pointer">
          follower
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default Follow;

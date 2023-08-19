import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MyRidesTable } from "~/components/MyRidesTable";

export function HomeTabs() {
  return (
    <div className="h-full w-full">
      <Tabs defaultValue="Upcoming Rides" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="Upcoming Rides" className="w-full">
            Upcoming Rides
          </TabsTrigger>
          <TabsTrigger value="Search Companion" className="w-full">
            Search Companion
          </TabsTrigger>
          <TabsTrigger value="Broadcast " className="w-full">
            Broadcast
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Upcoming Rides">
          <MyRidesTable></MyRidesTable>
        </TabsContent>
        <TabsContent value="Search Companion">
          d Search for a companion now.
        </TabsContent>
        <TabsContent value="Broadcast">Fill a form to get a ride.</TabsContent>
      </Tabs>
    </div>
  );
}

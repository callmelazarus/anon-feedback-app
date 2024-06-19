import Image from "next/image";
import FeedbackBox from "./feedbackinput";
import TabsComponent from "./tabSelection";

export default function Home() {

  const items = [
    {title: "Tab 1", content: "Test, Test 2"},
    {title: "Tab 1", content: "Test"},
    {title: "Tab 1", content: "Test"},
    {title: "Tab 1", content: "Test"},
    {title: "Tab 1", content: "Test"},
    {title: "Tab 1", content: "Test"},

  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FeedbackBox></FeedbackBox>
      <TabsComponent items = {items} ></TabsComponent>
    </main>
  );
}

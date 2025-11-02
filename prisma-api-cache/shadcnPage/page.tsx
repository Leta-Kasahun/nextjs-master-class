"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Toaster, toast } from "sonner";
const ShadcnPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <div className="p-8 space-y-12 max-w-6xl mx-auto">
      {/* 1. Buttons */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Buttons</h2>
        <div className="flex gap-3 flex-wrap">
          <Button>Default</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      {/* 2. Card */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Card</h2>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Product</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Wireless headphones with noise cancellation.</p>
            <Button className="mt-2">Add to Cart</Button>
          </CardContent>
        </Card>
      </section>

      {/* 3. Input / Form */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Input / Form</h2>
        <div className="flex flex-col gap-2 max-w-sm">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" />
          <Button onClick={() => toast.success("Form submitted!")}>Submit</Button>
        </div>
      </section>

      {/* 4. Select */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Select</h2>
        <Select onValueChange={(value: string) => setSelectedOption(value)} className="max-w-xs">
          <SelectTrigger>
            <SelectValue placeholder="Choose option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        {selectedOption && <p className="mt-1">Selected: {selectedOption}</p>}
      </section>

      {/* 5. Tabs */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Tabs</h2>
        <Tabs defaultValue="tab1" className="max-w-md">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Tab 1</TabsContent>
          <TabsContent value="tab2">Content for Tab 2</TabsContent>
        </Tabs>
      </section>

      {/* 6. Accordion */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Accordion</h2>
        <Accordion type="single" collapsible className="max-w-md">
          <AccordionItem value="faq1">
            <AccordionTrigger>What is Next.js?</AccordionTrigger>
            <AccordionContent>Next.js is a React framework for building web apps.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq2">
            <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
            <AccordionContent>shadcn/ui provides prebuilt accessible UI components.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 7. Avatar */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Avatar</h2>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=5" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
      </section>

     

      {/* 9. Notifications */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Notifications (Sonner)</h2>
        <Button onClick={() => toast.success("Action Successful!")}>Show Notification</Button>
      </section>

      {/* Sonner Toaster */}
      <Toaster position="top-right" />
    </div>
  );
};

export default ShadcnPage;

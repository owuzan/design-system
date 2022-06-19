import Button from "@/components/Button";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap items-start space-x-4 w-full max-w-screen-lg mx-auto py-20">
        <Button _hierarchy="primary" _size="sm">
          Button SM
        </Button>
        <Button _hierarchy="primary" _size="md">
          Button MD
        </Button>
        <Button _hierarchy="primary" _size="lg">
          Button LG
        </Button>
        <Button _hierarchy="primary" _size="xl">
          Button XL
        </Button>
        <Button _hierarchy="primary" _size="2xl" disabled>
          Button 2XL
        </Button>
      </div>
      <div className="flex flex-wrap items-start space-x-4 w-full max-w-screen-lg mx-auto py-20">
        <Button _hierarchy="secondary" _size="sm">
          Button SM
        </Button>
        <Button _hierarchy="secondary" _size="md">
          Button MD
        </Button>
        <Button _hierarchy="secondary" _size="lg">
          Button LG
        </Button>
        <Button _hierarchy="secondary" _size="xl">
          Button XL
        </Button>
        <Button _hierarchy="secondary" _size="2xl" disabled>
          Button 2XL
        </Button>
      </div>

      <div className="flex flex-wrap items-start space-x-4 w-full max-w-screen-lg mx-auto py-20">
        <Button _hierarchy="error" _size="sm">
          Button SM
        </Button>
        <Button _hierarchy="error" _size="md">
          Button MD
        </Button>
        <Button _hierarchy="error" _size="lg">
          Button LG
        </Button>
        <Button _hierarchy="error" _size="xl">
          Button XL
        </Button>
        <Button _hierarchy="error" _size="2xl" disabled>
          Button 2XL
        </Button>
      </div>
    </div>
  );
};

export default Home;

import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // This is where you perform side effects, such as data fetching or setting up subscriptions
    console.log('Component mounted or updated');

    // Return a cleanup function to be called on unmount or before the effect runs again
    return () => {
      console.log('Component will unmount or effect will re-run');
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div>
      <p>My component content</p>
    </div>
  );
}

export default MyComponent;

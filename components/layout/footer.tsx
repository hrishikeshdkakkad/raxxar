import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-bold font-manrope mb-2">Force Platforms Inc</span>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Force Platforms Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
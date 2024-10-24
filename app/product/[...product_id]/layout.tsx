import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Detail Page - Product",
};
  
export default function ProductDetailLayout({
    children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
    <>
        {children}
    </>
);
}
  
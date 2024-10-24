import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Page - Product",
};
  
export default function ProductsLayout({
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
  
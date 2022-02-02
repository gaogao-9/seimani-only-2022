import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export interface AnchorLinkProps
  extends Omit<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    "href"
  > {
  href?: string;
  to?: string;
  children: React.ReactNode;
}

export const AnchorLink: React.VFC<AnchorLinkProps> = ({
  href,
  to,
  children,
  ...props
}) => {
  const isAnotherOrigin = !to;
  const url = (isAnotherOrigin ? href : to) ?? ("" as string);
  const anchor = (
    <a
      href={isAnotherOrigin ? url : (undefined as unknown as string)}
      target={isAnotherOrigin ? "_blank" : "_self"}
      rel="noreferrer"
      {...props}
    >
      <Text textDecoration="underline" color="blue.500" as="span">
        {children}
      </Text>
    </a>
  );

  return to ? (
    <Link href={url} passHref>
      {anchor}
    </Link>
  ) : (
    anchor
  );
};

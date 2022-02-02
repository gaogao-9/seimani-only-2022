import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { Center } from "@chakra-ui/layout";
import { routes } from "~/foundation/route";

const List = styled.ul`
  overflow: auto;
  list-style: none;
`;

const ListItem = styled.li``;

const StyledLink = styled.a`
  position: relative;
  padding: 3px 5px;
  font-size: var(--chakra-fontSizes-lg);
  text-decoration: none;
  color: var(--chakra-colors-yellow-600);
  font-family: "Shippori Mincho B1", serif;

  &::after {
    position: absolute;
    bottom: -1px;
    left: 50%;
    content: "";
    width: calc(100% - 10px);
    height: 1px;
    background: var(--chakra-colors-yellow-600);
    transform: translateX(calc(-50% + 2.5px)) scaleX(0);
    transform-origin: center top;
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: translateX(calc(-50% + 2.5px)) scaleX(1);
  }

  &[aria-disabled] {
    pointer-events: none;
    font-weight: 600;

    &::after {
      transform: translateX(calc(-50% + 2.5px)) scaleX(1);
    }
  }
`;

export const RoutingMenu: React.VFC = () => {
  const router = useRouter();

  return (
    <>
      <List>
        {routes.map((route) => {
          const isSamePathname = route.pathname === router.pathname;

          return (
            <ListItem key={route.title}>
              <Center my={4}>
                <Link href={route.pathname} passHref>
                  <StyledLink
                    aria-disabled={
                      isSamePathname || (undefined as unknown as boolean)
                    }
                    tabIndex={isSamePathname ? -1 : 0}
                  >
                    {route.title}
                  </StyledLink>
                </Link>
              </Center>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

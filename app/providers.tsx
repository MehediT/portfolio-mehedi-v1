"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { I18nProviderClient } from "@/locales/client";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  localeProps: LocaleProps;
}
export interface LocaleProps {
  locale: string;
  defaultLocale: string;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({children, themeProps, localeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <I18nProviderClient locale={localeProps.locale}>
          {children}
        </I18nProviderClient>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

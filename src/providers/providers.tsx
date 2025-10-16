"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import {
	toSolanaWalletConnectors,
} from "@privy-io/react-auth/solana";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<PrivyProvider
			appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
			clientId={process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID!}
			config={{
				loginMethods: ["wallet"],
				embeddedWallets: {
					ethereum: {
						createOnLogin: "off",
					},
					solana: {
						createOnLogin: "off",
					},
				},
				appearance: { walletChainType: "ethereum-and-solana" },
				externalWallets: { solana: { connectors: toSolanaWalletConnectors() } },
			}}
		>
			{children}
		</PrivyProvider>
	);
}

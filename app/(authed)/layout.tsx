import "@styles/globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { Toaster } from "@/components/ui/Toaster";
import ProvidersLayout from "@/components/sections/authentification/ProviderLayout";

import Header from "@/components/sections/navigation/HeaderAuth";
import Footer from "@/components/sections/navigation/Footer";
import AccessDenied from "@/components/sections/display/AccessDenied";

export const metadata: Metadata = {
	title: "StageUp - Your Professional Community",
	description:
		"StageUp is a professional community for students and recent graduates to connect with each other and with companies.",
	openGraph: {
		title: "StageUp - Your Professional Community",
		description:
			"StageUp is a professional community for students and recent graduates to connect with each other and with companies.",
		url: "https://stageup.vercel.app/",
		siteName: "StageUp",
		type: "website",
		images: "https://stageup.vercel.app/og.jpeg",
	},
	twitter: {
		card: "summary_large_image",
		title: "StageUp - Your Professional Community",
		description:
			"StageUp is a professional community for students and recent graduates to connect with each other and with companies.",
	},
};

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = (await getServerSession(authOptions)) as any;

	if (!session) {
		return (
			<AccessDenied
				statusCode={401}
				title="Vous n'êtes pas connecté"
				description="Vous devez être connecté pour accéder à cette page. Connectez-vous ou créez un compte."
				button="Se connecter"
				link="/login"
			/>
		);
	}

	if (!session.user.isIntern && !session.user.isEnterprise) {
		return (
			<AccessDenied
				statusCode={403}
				title="Vous n'avez pas accès à cette page"
				description="Vous devez remplir le formulaire avant de pouvoir accéder à cette page."
				button="Remplir le formulaire"
				link="/login/welcome/form"
			/>
		);
	}

	return (
		<html lang="en">
			<body className={GeistSans.className}>
				<ProvidersLayout>
					<Header {...session.user} />

					<main className="-mt-32">
						<div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
							{children}
						</div>
					</main>
					
					<Footer />
					<Toaster />
				</ProvidersLayout>
			</body>
		</html>
	);
}

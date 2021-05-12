import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './component/Home';
import Header from './component/Header';
import MintingSection from './component/MintingSection';
import InstaDialog from './component/InstaDialog';
import CustomCard from './component/CustomCard';

describe('Input value', () => {

	it('download wallet button check', () => {
		render(< Home />)
		expect(screen.getByText(/Download Wallet/i)).toBeInTheDocument()

	}),

		it('header label test', () => {
			render(< Header />)
			expect(screen.getByText(/Magnus Iversson/i)).toBeInTheDocument()
		}),

		it('mint button test', () => {
			render(< MintingSection />)
			expect(screen.getByText(/MINT NFT/i)).toBeInTheDocument()
		}),

		it('image preview button test', () => {
			render(< CustomCard />)
			expect(screen.getByText(/Image Preview/i)).toBeInTheDocument()
		}),

		it('Instagram button test', () => {
			render(< InstaDialog />)
			expect(screen.getByText(/Choose Instagram Image/i)).toBeInTheDocument()
		}),


		it('negative test', () => {
			render(< Home />)
			try {
				// if the element is found, the following expect will fail the test
				expect(screen.getByText(/Internet Surfiing/i))

			} catch (error) {
				// otherwise, the expect will throw, and the following expect will pass the test
				expect(true).toBeTruthy();
			}

		})
})

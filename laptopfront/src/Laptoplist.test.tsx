import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import Laptoplist from './components/Laptoplist';
const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false,},},});
const wrapper = ({children } : { children: React.ReactNode }) => (
    <QueryClientProvider client = {
        queryClient}>{children}
    </QueryClientProvider>);
describe("Laptoplist tests", () => { test("component renders", () => {render(<Laptoplist />, { wrapper });
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();})
    test("Laptops are fetched", async () => {
    render(<Laptoplist />, { wrapper });
    await waitFor(() => screen.getByText(/New Laptop/i));
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();})
    test("Open new laptop modal", async () => {
    render(<Laptoplist />, { wrapper });
    await waitFor(() => screen.getByText(/New Laptop/i));
    await userEvent.click(screen.getByText(/New Laptop/i));
    expect(screen.getByText(/Save/i)).toBeInTheDocument();})  
});
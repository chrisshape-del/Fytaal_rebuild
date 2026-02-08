import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Team from '../pages/Team';
import { BrowserRouter } from 'react-router-dom';

// Mock React Router because Team uses Link
const MockRouter = ({ children }) => (
    <BrowserRouter>
        {children}
    </BrowserRouter>
);

// Mock Framer Motion to avoid transparency issues in JSDOM
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className, onClick, ...props }) => (
            <div className={className} onClick={onClick} {...props}>
                {children}
            </div>
        ),
        h1: ({ children, className }) => <h1 className={className}>{children}</h1>,
        p: ({ children, className }) => <p className={className}>{children}</p>,
    },
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useTransform: () => 0,
}));

describe('Team Page Flip Logic', () => {
    it('renders team cards and handles flip interaction', async () => {
        render(
            <MockRouter>
                <Team />
            </MockRouter>
        );

        // Check if Doriene (first member) text is visible
        const dorieneText = screen.getByText(/Doriene Verzijlenberg/i);
        expect(dorieneText).toBeInTheDocument();

        // Find the "Lees meer" button
        // We added specific aria-label or just search by text
        const buttons = screen.getAllByText(/Lees meer over/i);
        const firstButton = buttons[0];

        expect(firstButton).toBeVisible();

        // Get the card container to check for rotation class
        // This is a bit tricky with compiled CSS, but we can check if the class maps
        // We might need to find the parent container.

        // Let's log to see if click fires our console log
        const consoleSpy = vi.spyOn(console, 'log');

        // Simulating the click on the button
        fireEvent.click(firstButton);

        // 1. Verify our debug log fired (proving the handler ran)
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Flipping card for Doriene'),
            true
        );

        // 2. Verify state change implications
        // After flip, the "Terug" button should become visible/accessible
        const backButtons = screen.getAllByText(/Terug/i);
        expect(backButtons[0]).toBeInTheDocument();

        consoleSpy.mockRestore();
    });
});

// Adjust the import paths as necessary
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import ViewOffer from '../components/ViewOffer';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'), 
  useParams: () => ({
    offerId: '1',
  }),
}));

vi.mock('firebase/firestore', async (importOriginal) => {
    const actual = await importOriginal(); 
    return {
      ...actual, 

      doc: vi.fn(),
      getDoc: vi.fn(() => Promise.resolve({
        exists: () => true,
        id: '1',
        data: () => ({
          position: 'Software Engineer',
          salary: '100000',
          equity: '0.5',
          bonus: '5000',
          culture: 'Innovative',
          learningOpportunities: 'Plenty',
        }),
      })),
    };
  });
  

vi.mock('react-toastify', () => ({
  ToastContainer: () => <div></div>,
  toast: {
    success: vi.fn(),
  },
}));

describe('ViewOffer Component Tests', () => {
  it('renders offer details successfully', async () => {
    render(<ViewOffer />);
    
    expect(await screen.findByText((content, node) => {
        const hasText = node => node.textContent === "Congratulation You have got an Awesome Offer.";
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node.children).every(child => !hasText(child));
        return nodeHasText && childrenDontHaveText;
      })).toBeInTheDocument();

      await waitFor(() => {
        const positionLabel = screen.getByText(/Position:/i);
        expect(positionLabel).toBeInTheDocument();
        
        const container = positionLabel.closest('.mb-2'); 
        expect(container).toHaveTextContent('Software Engineer');
      });

      await waitFor(() => {
        const positionLabel = screen.getByText(/Salary:/i);
        expect(positionLabel).toBeInTheDocument();
        
        const container = positionLabel.closest('.mb-2'); 
        expect(container).toHaveTextContent('100000');
      });

      await waitFor(() => {
        const positionLabel = screen.getByText(/Equity:/i);
        expect(positionLabel).toBeInTheDocument();
        
        const container = positionLabel.closest('.mb-2'); 
        expect(container).toHaveTextContent('0.5');
      });

      await waitFor(() => {
        const positionLabel = screen.getByText(/Bonus:/i);
        expect(positionLabel).toBeInTheDocument();
        
        const container = positionLabel.closest('.mb-2'); 
        expect(container).toHaveTextContent('5000');
      });

      await waitFor(() => {
        const positionLabel = screen.getByText(/Culture:/i);
        expect(positionLabel).toBeInTheDocument();
        
        const container = positionLabel.closest('.mb-2'); 
        expect(container).toHaveTextContent('Innovative');
      });

      await waitFor(() => {
        const positionLabel = screen.getByText(/Learning Opportunities:/i);
        expect(positionLabel).toBeInTheDocument();
        
        const container = positionLabel.closest('.mb-2'); 
        expect(container).toHaveTextContent('Plenty');
      });
      
  });
});

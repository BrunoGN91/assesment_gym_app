import {Home} from './Home'
import { fireEvent, render, screen, waitFor, server } from '@testing-library/react'
import user from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';

describe("testing component", () => {

    beforeEach(() => {
        render(
            <Home />, {wrapper: MemoryRouter}
        )
    })

    it("Testing elements in the document", () => {
        const headerHome = screen.getByRole('heading', {
            name: /home/i
          })
        
        const headerReports = screen.getByRole('heading', {
            name: /reports/i
          })

        const headerManage = screen.getByRole('heading', {
            name: /manage/i
          })

          expect(headerManage, headerHome, headerManage).toBeInTheDocument()
    })
})
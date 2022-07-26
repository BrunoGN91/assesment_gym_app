import { Header } from './Header'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';


const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
       useNavigate: () => mockedUsedNavigate,
     }));

describe("testing Header Component",  () => {
    
    beforeEach(() => {
        render(
            <Header />,
            {wrapper: MemoryRouter}
        )
    })


it("Testing elements", () => {

        expect(headerHome()).toBeInTheDocument()
        expect(headerReports()).toBeInTheDocument()
        expect(headerManage()).toBeInTheDocument()
        expect(searchIcon()).toBeInTheDocument()
        expect(menuIcon()).toBeInTheDocument()
        expect(dashboard()).toBeInTheDocument()
        expect(calendar()).toBeInTheDocument()
        expect(clients()).toBeInTheDocument()
        expect(classes()).toBeInTheDocument()
        expect(payments()).toBeInTheDocument()
        expect(studio()).toBeInTheDocument()
    
})
it("testing Navigate", () => {
    handleClickClients()
    handleClickPayments()
    handleClickStudio()
    handleClickClasses()
    handleClickDashboard()
    handleClickCalendar()
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(6)
})
})

const headerHome = () => {
    return screen.getByRole('heading', {name: /home/i })
}

const headerReports = () => {
    return screen.getByRole('heading', {
        name: /reports/i
      })
}

const headerManage = () => {
    return screen.getByRole('heading', {
        name: /manage/i
      })
}

const searchIcon = () => {
    return screen.getByTestId('SearchIcon')
}

const menuIcon = () => {
    return screen.getByTestId('SearchIcon')
}

const dashboard = () => {
    return screen.getByText(/dashboard/i)
}

const calendar = () => {
    return screen.getByText(/calendar/i)
}

const clients = () => {
    return screen.getByText(/clients/i)
}

const classes = () => {
    return screen.getByText(/classes/i)
}

const payments = () => {
    return screen.getByText(/payments/i)
}

const studio = () => {
    return screen.getByText(/studio/i)
}

const handleClickClients = () => {
    return user.click(clients())
}
const handleClickPayments = () => {
    return user.click(payments())
}
const handleClickStudio = () => {
    return user.click(payments())
}
const handleClickClasses = () => {
    return user.click(classes())
}
const handleClickCalendar = () => {
    return user.click(calendar())
}
const handleClickDashboard = () => {
    return user.click(dashboard())
}
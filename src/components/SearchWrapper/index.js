import React, {useEffect, useRef} from 'react'
import axios from 'axios'
import ShortDescription from './ShortDescription'
import Search from '../SearchForms/SearchContainer'
import backgroundImage from '../../graphycs/images/book_background.jpg'
import {Route} from 'react-router-dom'
import SearchNavbarContainer from './SearchNavbar/SearchNavbarContainer'
import {withProvideSearchWithStore} from '../../hocs/withHoc'
import BooklistContainer from './BooklistContainer'
import HeaderImage from '../Header/HeaderImageBlured'
import {useQuery} from '../../hooks/index'
import {setQueryParam} from '../../api/responseProcessing'
import {useLocation} from 'react-router-dom'

//Paginator
import Paginator from './Pagination/BooksPaginationContainer'

const SearchWrapper = (props) =>{
    let query = useQuery()
    const location = useLocation()
    const shortDescriptionRef = React.useRef(null)
    
    const queryParams = useRef({})
    useEffect(()=>{
        queryParams.current.title = setQueryParam(query.get(`q`))
        queryParams.current.author = setQueryParam(query.get(`author`))
        queryParams.current.filter = setQueryParam(query.get(`filter`))
        queryParams.current.newestBook = setQueryParam(query.get(`newestBook`))
        if(props.isAllowedToSendRequest){
            if(location.search !== ""){
                props.getBooksThunk(queryParams.current)
            }
        }
    })

    const showDescription = () =>{
        shortDescriptionRef.current.style.animation = 'short_description_show 0.3s ease-in-out 0s 1 normal forwards'
    }
    const hideDescription = () =>{
        shortDescriptionRef.current.style.animation = 'short_description_hide 0.3s ease-in-out 0s 1 normal forwards'
    }

    return( 
        <React.Fragment>
            <section className='search_container'>
            <HeaderImage isBlured={false} src={backgroundImage}/>
                <div className="search_section_wrapper">
                    <div className="search_section side_offset">
                        <div className="search">
                            <SearchNavbarContainer showDescription={showDescription}/>
                            <Route path='/React_Books_Search_System/' component={withProvideSearchWithStore(Search)}/>

                            <Paginator queryParams={queryParams.current}/>
                            <BooklistContainer />
                        </div>

                        <ShortDescription 
                        shortDescriptionRef={shortDescriptionRef} 
                        hideDescription={hideDescription}
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default SearchWrapper
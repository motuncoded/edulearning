import React from 'react'
import Article from './Article'
import { MdCastForEducation, MdDesignServices } from 'react-icons/md'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { GrCloudSoftware } from 'react-icons/gr'
import { GiPhotoCamera, GiVideoCamera } from 'react-icons/gi'

const Categories = () => {
  return (
        <section className='padding-block-900  '>
          <div className='container ' >
          <div className='flex'>
            <p className=' fs-primary-heading '>Explore  categories.</p>
            </div>
            <div className='values padding-block-700 '>
              <Article  icon={<MdDesignServices/>} heading="Design" paragraph="" />
              <Article icon={<FaMapMarkedAlt/>} heading="Marketing" paragraph="" />
              <Article  icon={<GrCloudSoftware/>} heading="IT/Software" paragraph="" />
             <Article  icon={<GiPhotoCamera/>} heading="Photography" paragraph="" />
             <Article  icon={<GiVideoCamera/>} heading="Videography" paragraph="" />
             <Article  icon={<MdCastForEducation/>} heading="Education" paragraph="" />
             <Article  icon={<GiPhotoCamera/>} heading="Photography" paragraph="" />
             <Article  icon={<GiPhotoCamera/>} heading="Photography" paragraph="" />

           
            </div>
            </div>
        </section>
  )
}

export default Categories
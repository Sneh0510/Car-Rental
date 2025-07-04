import React, { useState } from 'react'
import { assets, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Sidebar = () => {

    const {user, axios, fetchUser} = useAppContext();
    const location = useLocation();
    const [image, setImage] = useState('')

    const updateImage = async ()=> {
        try {
            const formData = new FormData()
            formData.append('image', image)

            const {data} = await axios.post('/api/owner/update-image', formData)

            if(data.success) {
                fetchUser()
                toast.success(data.message)
                setImage('')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm'>
        <div className='group relative'>
            <label htmlFor="image">
                <img src={image ? URL.createObjectURL(image) : user?.image || 'https://www.google.com/imgres?q=unsplash&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1449034446853-66c86144b0ad%3Fw%3D620%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0&imgrefurl=https%3A%2F%2Funsplash.com%2Fexplore&docid=dvqPsHOAEumZIM&tbnid=EYvEaTQh6GUIpM&vet=12ahUKEwipgdXamJGOAxU-dfUHHa-GPHsQM3oFCIABEAA..i&w=620&h=413&hcb=2&ved=2ahUKEwipgdXamJGOAxU-dfUHHa-GPHsQM3oFCIABEAA'} alt="" className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto'/>
                <input type="file" id="image" accept='image/*' hidden onChange={(e)=> setImage(e.target.files[0])}/>

                <div className='absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer'>
                    <img src={assets.edit_icon} alt="" />
                </div>
            </label>

        </div>
        {image && (
            <button onClick={updateImage} className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer'>Save <img src={assets.check_icon} width={13} alt=""/></button>
        )}
        <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

        <div className='w-full'>
            {ownerMenuLinks.map((link, index)=> (
                <NavLink key={index} to={link.path} className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${link.path === location.pathname ? "bg-primary/10 text-primary" : 'text-gray-600'}`}>
                    <img src={link.path === location.pathname ? link.coloredIcon : link.icon} alt="car icon" />
                    <span className='max-md:hidden'>{link.name}</span>
                    <div className={`${link.path === location.pathname && 'bg-primary'} w-1.5 h-8 rounded-1 right-0 absolute`}></div>
                </NavLink>
            ))}

        </div>
    </div>
  )
}

export default Sidebar
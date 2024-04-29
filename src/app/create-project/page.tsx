'use client';

import { useUser } from "@clerk/nextjs";
import { ChangeEvent, Dispatch, FormEvent, FormEventHandler, SetStateAction, useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
import Button from "@/components/button";
import Image from "next/image";

const technologies = [
  {name: "HTML", id: 1}, 
  {name: "CSS", id: 2},
  {name: "JS", id: 3},
  {name: "TS", id: 4},
  {name: "REACT", id: 5},
  {name: "TAILWIND", id: 6},
  {name: "NEXT", id: 7},
  {name: "SASS", id: 8},
  {name: "NODE", id: 9},
  {name: "EXPRESS", id: 10},
  {name: "POSTGRESS", id: 11}
];

interface Technology {
  name: string;
  id: number
};

type TechnologiesList = Technology[]

const CreateProject = () => {
  const { user } = useUser();

  const [title, setTitle] = useState<string>('');
  const [repository, setRepository] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [linkedin, setLinkedin] = useState<string>('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const [image, setImage] = useState<string>('');
  const [fileInput, setFileInput] = useState<string>('');
  const [previewSource, setPreviewSource] = useState();

  const handleSetInput = (
    method: Dispatch<SetStateAction<string>>,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    method(event.target.value)
  }

  const handleMultiSelect = (selectedList: TechnologiesList) => {
    const technologyNames = selectedList.map(technology => technology.name);
    
    setSelectedTechnologies(technologyNames);

    console.log(technologyNames);
  };

  const handleInputImage = (e) => {
    const image = e.target.files[0]
    previewImage(image)
  }

  const previewImage = (file) => {
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () => {
      setPreviewSource(render.result)
    }

    console.log(previewSource)
  }

  const uploadImage = (base64EncodedImage) => {
    return base64EncodedImage;
  }

  const handleCreateProject = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const image = uploadImage(previewSource)

        const data = {
          title,
          repository,
          description,
          linkedin,
          image,
          technologies: selectedTechnologies,
          userId: user?.id
        };

        const response = await fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Otrzymana treść odpowiedzi:', responseData);
        } else {
            console.error('Błąd odpowiedzi:', response.statusText);
        }
    } catch (error) {
        console.error('Błąd podczas wysyłania zapytania:', error);
    }
};


  return (
    <main className="grid place-items-center min-h-screen relative">
      {!user 
        ? 
          'loading' 
        : 
  
        <section
            className="w-[90%] lg:w-[68%] px-[144px] lg:px-[144px] pt-[30px] lg:pt-[78px] pb-[64px] border-t-2 border-l-2 border-r-2 border-headline
            border-b-4 rounded-t-20 rounded-r-20 rounded-l-20 rounded-xl shadow-customShadow text-white	"
          >
            <h1 className="text-center text-textSecondary text-[34px] font-bold">
              Create your project
            </h1>
            <form className="w-full mt-[50px]" onSubmit={handleCreateProject}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                    className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2 text-textSecondary"
                    htmlFor="grid-title"
                  >
                    Title
                  </label>
                  <input
                    className="appearance-none block w-full bg-secondary border-headline text-white border border-red-500 rounded py-3 px-4 mb-3
                      leading-tight focus:outline-none focus:bg-white placeholder-gray text-textSecondary"
                    id="grid-title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => handleSetInput(setTitle, e)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2 text-textSecondary"
                    htmlFor="grid-repository"
                  >
                    Repository
                  </label>
                  <input
                    className="appearance-none block w-full bg-secondary border-headline text-white border border-red-500 rounded py-3 px-4 mb-3
                      leading-tight focus:outline-none focus:bg-white placeholder-gray text-textSecondary"                    
                    id="grid-repository"
                    type="text"
                    placeholder="Link"
                    value={repository}
                    onChange={(e) => handleSetInput(setRepository, e)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2 text-textSecondary" htmlFor="grid-description">
                    Description
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500 min-h-72"
                    id="grid-description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => handleSetInput(setDescription, e)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-textSecondary"
                    htmlFor="grid-city"
                  >
                    Linkedin
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4
                      leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-secondary border-headline text-textSecondary"
                    id="grid-city"
                    type="text"
                    placeholder="linkedin"
                    value={linkedin}
                    onChange={(e) => handleSetInput(setLinkedin, e)}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-white text-textSecondary"
                    htmlFor="grid-technologies"
                  >
                    Technologies
                  </label>
                  <Multiselect
                    options={technologies}
                    selectedValues={selectedTechnologies.forEach(technology => technology)}
                    onSelect={handleMultiSelect}
                    onRemove={handleMultiSelect}
                    displayValue="name"
                    className="bg-secondary rounded border-none outline-none mt-3"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 text-textSecondary"
                    htmlFor="file_input"
                  >
                    IMAGE
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-secondary
                    dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-2 px-2
                    border-headline text-textSecondary"
                    id="file_input"
                    type="file"
                    value={image}
                    onChange={handleInputImage}
                  />
                </div>
              </div>
              <div className="flex w-full justify-end mt-10">
                <Button width={200} height={50} text={"Save"} type="submit" />
              </div>
              {previewSource && (
                <Image src={previewSource} alt="preview" width={500} height={500} />
              )}
            </form>
        </section>
      }
    </main>
  );
};

export default CreateProject;

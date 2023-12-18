"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import { getProduct } from '@/services/api/product.api.js';
import BreadCrumb from "@/components/UI/Breadcrumb";
import TitlePage from '@/components/UI/TitlePage';
import ProductFancyBox from "@/components/products/ProductFancyBox";
import Loader from "@/components/UI/Loader";
import Alert from "@/components/UI/Alert";
import { getBase64 } from '../../../lib/base64';
import './FormulairePopin.css';

export default function Page() {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [placehodlerImage, setPlaceholderImage] = useState(null);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [slideIndex, setSlideIndex] = useState(0);
    const [showFancyBox, setShowFancyBox] = useState(false);
    const [error, setError] = useState(null);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        nom:"",
        prenom:"",
        email:"",
    })

    const handleInterestedClick = async () => {
        console.log("Je suis intéressé !");
        openForm();
    };


    const openForm = () => {
        setIsFormOpen(true);
    }

    const closeForm = () => {
        setIsFormOpen(false);
    }

    const handleSubmit = async () => {
        try {
            const email = formData.email
            const prenom = formData.prenom
            const nom = formData.nom
            const mail = {
                "to": email,
                "subject": "Merci de votre intérêt !",
                "text": `Bonjour ${prenom}, merci d'etre intéréssé par notre article : ${product.nom}`
              }

            console.log('Envoi du formulaire en cours...', formData);
            // Envoi des données du formulaire à l'API
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/send-email`, {
                method: 'POST',
                Origin: `${process.env.NEXT_PUBLIC_API_ENDPOINT}`,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mail),
            });
    
            if (response.ok) {
                console.log('E-mail envoyé avec succès!');
            } else {
                console.error('Erreur lors de l\'envoi de l\'e-mail caramba- Statut:', response.status);
                const errorText = await response.text();
                console.error('Message d\'erreur:', errorText);
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail', error);
        }
    
        console.log("Formulaire soumis avec succès :", formData);
        setFormData({
            nom: "",
            prenom: "",
            email: "",
        });
        closeForm();
    };

    const FormulairePopin = (
        <div className="popin">
            <form>
                <label>Nom:</label>
                <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                />

                <label>Prénom:</label>
                <input
                    type="text"
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                />

                <label>Email:</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <button type="button" onClick={handleSubmit}>
                    Valider
                </button>
            </form>

            <button className="close-button" onClick={closeForm}>
                <span>&times;</span>
            </button>
        </div>
    );

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                let product = await getProduct(id);
                if (product) {
                    setProduct(product.data);
                }
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchProduct();
        }
    }, [id]);

    useEffect(() => {
        const fetchPlaceholderImage = async () => {
            const placeholder = await getBase64(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.thumbnail}`);
            setPlaceholderImage(placeholder);
        }
        if (product) {
            setSelectedImage(product.thumbnail);
            fetchPlaceholderImage();
        }
    }, [product]);

    if (loading) return <Loader />;

    const goToNextSlide = () => {
        setSelectedImage(slideIndex === 0 ? product.packshot : product.thumbnail);
        setSlideIndex(slideIndex === 0 ? 1 : 0);
    }

    const goToPrevSlide = () => {
        setSelectedImage(slideIndex === 0 ? product.packshot : product.thumbnail);
        setSlideIndex(slideIndex === 0 ? 1 : 0);
    }

    return (
        <div className="container mx-auto py-12">
            {error && (
                <Alert message={error.message} type="error" />
            )}
            {!product && (
                <Alert message="No products found" type="error" />
            )}
            {showFancyBox && (
                <ProductFancyBox
                    img={selectedImage}
                    prevSlide={() => goToPrevSlide()}
                    nextSlide={() => goToNextSlide()}
                    close={() => { setShowFancyBox(false) }}
                />
            )}
            <BreadCrumb current_page={product?.name} />
            <div className="flex">
                <div className="thumbnail lg:flex-1">
                    <div
                        onClick={() => setShowFancyBox(true)}
                        className="group/show w-4/5 h-[550px] overflow-hidden cursor-pointer">
                        <Image
                            blurDataURL={placehodlerImage}
                            className="object-cover h-full w-full group-hover/show:scale-105 transition ease-in-out delay-150 z-1"
                            alt={product.name}
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${selectedImage}`}
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="carousel flex mt-4 overflow-hidden">
                        <div className="item w-[100px] h-[100px] mr-2">
                            <Image
                                className="cursor-pointer object-cover h-full w-full "
                                alt={product.name}
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.thumbnail}`}
                                width={100}
                                height={100}
                                onMouseOver={() => {
                                    setSelectedImage(product.thumbnail);
                                    setSlideIndex(0);
                                }}
                                onClick={() => {
                                    setSelectedImage(product.thumbnail);
                                    setSlideIndex(0);
                                }}
                            />
                        </div>
                        <div className="item w-[100px] h-[100px]">
                            <Image
                                className="cursor-pointer object-cover h-full w-full"
                                alt={product.name}
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.packshot}`}
                                width={100}
                                height={100}
                                onMouseOver={() => {
                                    setSelectedImage(product.packshot);
                                    setSlideIndex(1);
                                }}
                                onClick={() => {
                                    setSelectedImage(product.packshot);
                                    setSlideIndex(1);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="content lg:flex-1 p-6">
                    <TitlePage title={product.name} />
                    <p className="mb-3 font-semibold text-lg">{product.price} €</p>
                    <p className="leading-7">{product.description}</p>

                    <button
                        className="bg-blue-500 text-white py-2 px-4 mt-4 rounded cursor-pointer"
                        onClick={() => {
                            handleInterestedClick();
                            openForm();
                        }}
                    >
                        Je suis intéressé
                    </button>

                    {isFormOpen && FormulairePopin}
                </div>
            </div>
        </div>
    );
}

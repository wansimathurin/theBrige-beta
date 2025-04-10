"use client";
import React from "react";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { notificationConfig } from "../../utils/constants";

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

import { useStoreForm } from "../../store/formVisible.store";
import axios from "axios";

export default function AddCampaign() {
  const [imagePreview, setImagePreview] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [slug, setSlug] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [target, setTarget] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const { closeForm } = useStoreForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const payload = {
    title,
    budget,
    slug,
    description,
    target,
    startDate,
    endDate,
    image: imagePreview,
  };

  const createCampaign = async () => {
    setSubmitting(true);
    try {
      const res = await axios.post(
        `/api/campaigns`,
        payload
      );
      toast.success("Campagne ajoutée avec succès 🚀", notificationConfig);
      closeForm();
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Erreur lors de l'ajout de la campagne", notificationConfig);
    } finally {
      setSubmitting(false);
    }
  };

 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen w-full backdrop-blur-md bg-[#ffffff91]">
      <ToastContainer />
      <Card className="w-[90%] max-w-5xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col items-center justify-center">
          <img
            src={imagePreview || "/logoPink.png"}
            alt="Preview"
            className="w-full h-[400px] object-cover rounded-md border"
          />
        </div>

        <div className="flex flex-col gap-4">
          <CardTitle className="text-center text-xl mb-4">
            Créer une Campagne
          </CardTitle>

          <form>
            <div className="grid grid-cols-1 gap-2">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Titre
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Ex: Campagne de lancement produit"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Budget
                </label>
                <input
                  id="budget"
                  type="text"
                  placeholder="Ex: 50000 FCFA"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="slug"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Slug
                </label>
                <input
                  id="slug"
                  type="text"
                  placeholder="Ex: lancement-produit"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Décrivez la campagne ici"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="target"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cible (optionnel)
                </label>
                <input
                  id="target"
                  type="text"
                  placeholder="Ex: Jeunes de 18 à 25 ans"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date de début
                </label>
                <input
                  id="startDate"
                  type="date"
                  placeholder="Sélectionnez une date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date de fin
                </label>
                <input
                  id="endDate"
                  type="date"
                  placeholder="Sélectionnez une date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </form>

          <CardFooter className="flex justify-between mt-4 p-0">
            <Button onClick={closeForm} variant="outline">
              Annuler
            </Button>
            {submitting ? (
              <Button disabled className="bg-[#c1731a]">
                <Loader2 className="animate-spin" color="#fff" /> Soumission...
              </Button>
            ) : (
              <Button onClick={createCampaign} className="bg-[#891CA4]">
                Créer
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}

"use client";
import { lazy,Suspense } from "react";import { BrowserRouter,Route,Routes } from "react-router-dom";
const Home=lazy(()=>import("@/src/pages/Home"));const ProjectDetails=lazy(()=>import("@/src/pages/ProjectDetails"));const NotFound=lazy(()=>import("@/src/pages/NotFound"));
export function PortfolioRouter(){return <BrowserRouter><Suspense fallback={<div className="route-loading">Abrindo elevador...</div>}><Routes><Route path="/" element={<Home/>}/><Route path="/projetos/:slug" element={<ProjectDetails/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense></BrowserRouter>}

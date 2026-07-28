"use client";
import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export function PixelWindow({children,className=""}:PropsWithChildren<{className?:string}>){return <div className={`pixel-window ${className}`}>{children}</div>}
export function SectionSign({floor,children}:PropsWithChildren<{floor:string}>){return <div className="section-sign"><span>ANDAR {floor}</span><h2>{children}</h2></div>}
export function Reveal({children,delay=0}:PropsWithChildren<{delay?:number}>){return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.45,delay}}>{children}</motion.div>}
export function PixelLink({href,children,secondary=false}:PropsWithChildren<{href:string;secondary?:boolean}>){return <a className={`pixel-button ${secondary?"secondary":""}`} href={href}>{children}<ArrowRight size={16}/></a>}
export function Scene({crop,alt}:{crop:string;alt:string}){return <div className={`scene scene-${crop}`} role="img" aria-label={alt}/>}

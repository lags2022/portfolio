"use client";

import Image from "next/image";
import { ProjectsProps } from "../../types";
import Github from "./Svgs/Github";
import ExternalLink from "./Svgs/ExternalLink";

const Detail = ({ id, title, gif, images, ...props }: ProjectsProps) => {
  return (
    <li id={`card_${id}`} className="card">
      <div className="group card__detail card__content bg-light dark:bg-darkblue dark:shadow-none">
        <h6 className="text-white text-base sm:text-lg font-bold text-center">
          {title}
        </h6>
        <div className="flex flex-col sm:flex-row justify-start items-start gap-6">
          <div className="overflow-hidden rounded-xl group-hover:rounded-xl">
            <Image
              className="group-hover:scale-105 transition-all duration-700 w-[300px] h-[187.5px] md:w-[400px] md:h-[250px] rounded-xl m-auto imagedetail"
              src={`/images/${id}.webp`}
              alt={title}
              width={4800}
              height={3000}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-4 max-w-md">
            <p className="font-medium text-sm md:text-base text-blue-400">
              {props.description}
            </p>
            <p className="text-sm md:text-base font-semibold text-light">
              {props.tecnologies}
            </p>
            <div className="flex m-auto sm:m-0 gap-4">
              <a
                href={props.github}
                className="h-8 w-8 group/hero"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github />
              </a>
              <a
                href={props.link}
                className="h-8 w-8 group/hero"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Detail;

"use client";

import Image from "next/image";
import { ProjectsProps } from "../../types";
import Github from "./Svgs/Github";
import ExternalLink from "./Svgs/ExternalLink";

const Detail = ({ id, title, gif, images, ...props }: ProjectsProps) => {
  return (
    <li id={`card_${id}`} className="card">
      <div className="card__detail card__content bg-light dark:bg-darkblue dark:shadow-none">
        <h6 className="text-base sm:text-lg font-bold text-center">{title}</h6>
        <div className="flex flex-col sm:flex-row justify-start items-start gap-6">
          <Image
            className="w-[200px] h-[150px] md:w-[300px] md:h-[200px] rounded-xl m-auto imagedetail"
            src={gif}
            alt={title}
            height={300}
            width={200}
          />
          <div className="flex flex-col gap-4 max-w-md">
            <p className="font-medium text-sm md:text-base">
              {props.description}
            </p>
            <p className="text-sm md:text-base font-semibold text-light">
              {props.tecnologies}
            </p>
            <div className="flex m-auto sm:m-0 gap-4">
              <a
                href={props.github}
                className="h-8 w-8 group"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github/>
              </a>
              <a
                href={props.link}
                className="h-8 w-8 group"
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

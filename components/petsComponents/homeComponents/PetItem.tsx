import Card from "../../ui/Card";
import { useRouter } from "next/router";

interface PetItemProps {
  id: string;
  owner: string;
  phone: string;
  image: string;
  description: string;
  date: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
}

const PetItem: React.FC<PetItemProps> = (props: PetItemProps) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li id={props.id} className="py-4">
      <Card>
        <div className="sm:py-5">
          <img
            src={props.image}
            className="w-full sm:w-2/3   mx-auto sm:rounded-2xl h-42 sm:h-80 overflow-hidden "
            alt={props.description}
          />
        </div>
        <div>
          <div className="px-4 py-4 sm:px-0">
            <h3 className="text-base px-4 font-semibold leading-7 text-gray-900">
              Owner Information
            </h3>
            <p className="mt-1 max-w-2xl px-4 text-sm leading-6 text-gray-500">
              Personal details and other info.
            </p>
            <p className="text-sm text-gray-400 text-end mr-4 mt-8">
              {props.date}
            </p>
          </div>
          <div className="border-t px-4 border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Full Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {props.owner}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {props.phone}
                </dd>
              </div>
              <section>
                <dt className="text-sm font-semibold leading-6 py-8 text-gray-900">
                  Last seen location
                </dt>
                <div className="px-4  flex text-center flex-wrap	sm:px-0">
                  <div className="w-1/2  ">
                    <dt className="text-sm font-semibold leading-6 text-gray-900">
                      Address line
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {props.address}
                    </dd>
                  </div>
                  <div className="w-1/2 ">
                    <dt className="text-sm font-semibold leading-6 text-gray-900">
                      City
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {props.city}
                    </dd>
                  </div>
                  <div className="w-1/2 my-4">
                    <dt className="text-sm font-semibold leading-6 text-gray-900">
                      Country
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {props.country}
                    </dd>
                  </div>
                  <div className="w-1/2 my-4">
                    <dt className="text-sm font-semibold leading-6 text-gray-900">
                      Zip code
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {props.zipCode}
                    </dd>
                  </div>
                </div>
              </section>
            </dl>
          </div>
        </div>

        <div className="p-5 text-center">
          <button
            onClick={showDetailsHandler}
            className=" border-solid px-3 py-2 rounded-lg border-2 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer"
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
};

export default PetItem;

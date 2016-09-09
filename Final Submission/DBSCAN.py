import json
from pprint import  pprint
import numpy as np
import pandas as pd
import re
from sklearn.cluster import KMeans,DBSCAN,SpectralClustering
from sklearn.preprocessing import  normalize,scale
from sklearn.feature_extraction import DictVectorizer
from sklearn.feature_selection import VarianceThreshold
from sklearn.neighbors import NearestNeighbors
import matplotlib.pyplot as plt
import Levenshtein


with open('vips_www.barnesandnoble.com.json',encoding='utf-8-sig') as json_file:
    parsed_json = json.load(json_file)

blocks_json = parsed_json["blocks"]
train_feature_all = []
feature_name_all = []
max_row_len = 0
features_dict = {}


for item in blocks_json:
    for feature in sorted(item.keys()):
        if feature not in features_dict:
            features_dict[feature] = 'none'

for item in blocks_json:
    row_all = features_dict.copy()
    for feature in sorted(item.keys()):
        row_all[feature] = item[feature]
    train_feature_all.append(row_all)

df = pd.DataFrame(train_feature_all,columns=sorted(features_dict.keys()))
df_numeric = df.select_dtypes(include=['int64','float64'])

#df_numeric_use = df_numeric[['-att-childElementCount','-att-clientLeft','-att-clientTop','-att-offsetHeight','-att-offsetLeft','-att-offsetTop','-att-offsetWidth','-att-scrollWidth','-att-scrollHeight','-att-tabIndex','-vips-startX','-vips-startY','-vips-endX','-vips-endY','-vips-degree-of-coherence']]

df_numeric_use = df_numeric[['-att-offsetHeight','-att-offsetLeft','-att-offsetTop','-att-offsetWidth','-vips-startX','-vips-startY','-att-scrollWidth','-att-scrollHeight']]
dfm = df_numeric_use.as_matrix()

X = normalize(dfm,norm='max',axis=0)

for i in range(6):
  X[:,i] *= 0.2

'''
#this shows a figure for the epsilon choice
nbrs = NearestNeighbors(n_neighbors=5,metric='manhattan').fit(X)
distances, indices = nbrs.kneighbors(X)
plt.plot(sorted(distances[:,4]))
plt.show()
'''

result = DBSCAN(eps=0.1,metric='manhattan').fit_predict(X)

result_id = df['-vips-id'].as_matrix()

final_result = np.transpose(np.vstack([result_id,result]))

clusterlist = []

for i in range(20):
    clusterlisti = []
    for row in final_result:
        if row[1] == i:
            clusterlisti.append(row[0])
    clusterlist.append(clusterlisti)

pprint(clusterlist)
